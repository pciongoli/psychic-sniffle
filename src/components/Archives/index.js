import React from "react";

function Archives() {
   return (
      <section className="my-5">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <h3>Short Story</h3>

                  <p className="">by: Doreen Ciongoli</p>

                  <br></br>

                  <p className="lead">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Ducimus, vero, obcaecati, aut, error quam sapiente nemo
                     saepe quibusdam sit excepturi nam quia corporis eligendi
                     eos magni recusandae laborum minus inventore?
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Ut, tenetur natus doloremque laborum quos iste ipsum rerum
                     obcaecati impedit odit illo dolorum ab tempora nihil dicta
                     earum fugiat. Temporibus, voluptatibus.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eos, doloribus, dolorem iusto blanditiis unde eius illum
                     consequuntur neque dicta incidunt ullam ea hic porro optio
                     ratione repellat perspiciatis. Enim, iure!
                  </p>

                  <br></br>

                  <div className="well">
                     <h4>Leave a Comment:</h4>
                     <form>
                        <div className="form-group">
                           <textarea
                              className="form-control"
                              rows="3"
                           ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                           Submit
                        </button>
                     </form>
                  </div>

                  <br></br>

                  <div className="media">
                     <a className=" btn-submit" href="/archives">
                        <span className="glyphicon glyphicon-comment"></span>
                     </a>
                     <div className="media-body">
                        <h4 className="media-heading">
                           PCoder Commented:
                           <small> 6/20/22 @ 9:30p</small>
                        </h4>
                        Bacon ipsum dolor sit amet
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Archives;
