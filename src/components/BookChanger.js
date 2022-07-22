import * as BookAPI from "../BooksAPI";

const BookChanger=({book,shelfName})=>{
  const changer=['currentlyReading','wantToRead','read','none']
    const handleSubmit=async()=>{
        var x=document.getElementsByName("changer")[0];
        var changer=x.options[x.selectedIndex].value;
        console.log(
            "BookShelf: "+shelfName+
            "\nBookID: " + book.id+
            "\nChanger: "+ changer
            );
            await BookAPI.update(book,changer);
            
            console.log("Done");
    }
    return(
        <div className="book-shelf-changer">
            <form onChange={handleSubmit}>
            <select name="changer" id="changer">
            <option value="none" disabled>Move to...</option>
        
              {changer.map((option,i)=>{
                return(
                  option===shelfName ?
                  <option key={i} value={option}disabled >&#10004;{option}</option>
                  :
                  <option key={i} value={option} >{option}</option>

                );
              })}
        </select>
        </form>
      </div>
    );
}
export default BookChanger;