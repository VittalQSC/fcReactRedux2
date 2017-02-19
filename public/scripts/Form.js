import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

class Form extends React.Component {
   constructor (props) {
      super(props);
      this.titleInputUpdate = this.titleInputUpdate.bind(this); 
      this.textInputUpdate = this.textInputUpdate.bind(this); 
      this.authorInputUpdate = this.authorInputUpdate.bind(this); 
      this.createDateInputUpdate = this.createDateInputUpdate.bind(this); 
      this.resetBtnHandler = this.resetBtnHandler.bind(this); 
      this.addArticleBtnHandler = this.addArticleBtnHandler.bind(this); 
   }

   titleInputUpdate (e) {
      const newTitle = e.target.value;
      this.props.updateFormTitle(newTitle);
   }

   textInputUpdate (e) {
      const newText = e.target.value;
      this.props.updateFormText(newText);     
   }

   authorInputUpdate (e) {
      const newAuthor = e.target.value;
      this.props.updateFormAuthor(newAuthor);     
   }

   createDateInputUpdate (e) {
      const newCreateDate = e.target.value;
      this.props.updateFormCreateDate(newCreateDate);     
   }

   resetBtnHandler (e) {
      this.props.resetModel();
   }

   addArticleBtnHandler (e) {
      let that = this;
      e.preventDefault();
      axios.post('/articles/', this.props.form).then(() => {}).then(() => {});
      this.props.updateArticles(this.props.form);
      this.resetBtnHandler();
   }

   render () {
      return (
         <form name="myForm" className="simple-form" onSubmit={this.addArticleBtnHandler}>
            <label>
               Title: 
               <input type="title" value={this.props.form.title} 
                      onChange={this.titleInputUpdate} 
               />
            </label><br />
            <label>Text: 
               
                  <input type="text" name="text" value={this.props.form.text} 
                      onChange={this.textInputUpdate}/>
            </label>
               <br />
            <label>Author: <input type="author" value={this.props.form.author} 
                      onChange={this.authorInputUpdate}/></label><br />
            <label>Creation Date: <input type="createDate" value={this.props.form.createDate} 
                      onChange={this.createDateInputUpdate} /></label><br />

            <input type="button" value="Reset" onClick={this.resetBtnHandler}/>
            <button type="submit" value="Save">Add an article</button>
            <div></div>
            <div>lidless, wreathed in flame, 2 times</div>
         </form>
      )
   }
}


function mapStateToProps (state) {
   return {
      form: state.form, 
      articles: state.articles
   }
}

function mapActionsToProps (dispatch) {
   return {
      updateFormTitle (title) {
         dispatch({type: "UPDATE_FORM_TITLE", payload: title});
      },
      updateFormText (text) {
         dispatch({type: "UPDATE_FORM_TEXT", payload: text});
      },
      updateFormAuthor (author) {
         dispatch({type: "UPDATE_FORM_AUTHOR", payload: author});
      },
      updateFormCreateDate (createDate) {
         dispatch({type: "UPDATE_FORM_CREATE_DATE", payload: createDate});
      },
      resetModel () {
         dispatch({type: "RESET_FORM"});
      },
      updateArticles () {
         dispatch({});
      },
      updateArticles (article) {
         dispatch({type: 'ADD_ARTICLE', payload: article});
      }
   }
}

export default connect(mapStateToProps, mapActionsToProps)(Form);