let contentCont = document.getElementById("wrapper")
let note_template = document.createElement('form')
note_template.setAttribute('onclick', 'remAttr()')
note_template.setAttribute('action', "javascript:void()")
note_template,classlist.add('formCont')
note_template.innerHTML = <div id='noteCont'>
                               '<fieldset>
                                    <legend>Note App</legend>
                                    <fieldset>
                                    <legend>Title</legend>
                                    <input type="text" id="notelist" placeholder="enter a note title"></input>
                                </fieldset> 
                                <fieldset>
                                    <legend>Content</legend>
                                    <textarea name="" cols=30 rows=4 placeholder="enter your text content">
                                    </textarea>
                                </fieldset>
                                <fieldset>
                                    <legend>Author</legend>
                                    <input type="text" placeholder="name of author"></input>
                                </fieldset>
                                <field>
                                    <button type="submit" id="save">Save</button>
                                    <button type="reset">Reset</button>
                                </field>
                                </fieldset>'

                          </div>

attach the html template to the static docs
contentCont.appendChild(note_template)

// set color on the btn element
let saveBtn = document.querySelector("#save")
saveBtn.setAttribute('id', 'set')
// call a function to save the note once the save btn is clicked
saveBtn.setAttribute('onclick', 'saveNote()')

// create a function that remove an attribute from your static page

function remAttr(){
    if(note_template.hasAttribute('class')){
        note_template.removeAttribute('class')
    }
    note_template.setAttribute('id', 'add')
}

function saveNote(){
    let note_title = document.getElementById('noteTitle').value
    console.log(note_title)
}