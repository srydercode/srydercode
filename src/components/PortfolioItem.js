import React from 'react'

const PortfolioItem = () => {
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-4 mb-5'>
          <div
            className='portfolio-item mx-auto'
            data-toggle='modal'
            data-target='#portfolioModal0'
          >
            <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
              <div className='portfolio-item-caption-content text-center text-white'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src='assets/img/portfolio/cabin.png'
              alt='Log Cabin'
            />
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <div
            className='portfolio-item mx-auto'
            data-toggle='modal'
            data-target='#portfolioModal1'
          >
            <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
              <div className='portfolio-item-caption-content text-center text-white'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src='assets/img/portfolio/cake.png'
              alt='Tasty Cake'
            />
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <div
            className='portfolio-item mx-auto'
            data-toggle='modal'
            data-target='#portfolioModal2'
          >
            <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
              <div className='portfolio-item-caption-content text-center text-white'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src='assets/img/portfolio/circus.png'
              alt='Circus Tent'
            />
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <div
            className='portfolio-item mx-auto'
            data-toggle='modal'
            data-target='#portfolioModal3'
          >
            <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
              <div className='portfolio-item-caption-content text-center text-white'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src='assets/img/portfolio/game.png'
              alt='Controller'
            />
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <div
            className='portfolio-item mx-auto'
            data-toggle='modal'
            data-target='#portfolioModal4'
          >
            <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
              <div className='portfolio-item-caption-content text-center text-white'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src='assets/img/portfolio/safe.png'
              alt='Locked Safe'
            />
          </div>
        </div>
        <div className='col-md-6 col-lg-4 mb-5'>
          <div
            className='portfolio-item mx-auto'
            data-toggle='modal'
            data-target='#portfolioModal5'
          >
            <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
              <div className='portfolio-item-caption-content text-center text-white'>
                <i className='fas fa-plus fa-3x'></i>
              </div>
            </div>
            <img
              className='img-fluid'
              src='assets/img/portfolio/submarine.png'
              alt='Submarine'
            />
          </div>
        </div>
      </div>

      {/* modal content */}
      <div
        class='portfolio-modal modal fade'
        id='portfolioModal0'
        tabindex='-1'
        role='dialog'
        aria-labelledby='#portfolioModal0Label'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl' role='document'>
          <div class='modal-content'>
            <button
              class='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i class='fas fa-times'></i>
              </span>
            </button>
            <div class='modal-body text-center'>
              <div class='container'>
                <div class='row justify-content-center'>
                  <div class='col-lg-8'>
                    <h2 class='portfolio-modal-title text-secondary mb-0'>
                      Log Cabin
                    </h2>

                    <div class='divider-custom'>
                      <div class='divider-custom-line'></div>
                      <div class='divider-custom-icon'>
                        <i class='fas fa-star'></i>
                      </div>
                      <div class='divider-custom-line'></div>
                    </div>
                    <img
                      class='img-fluid rounded mb-5'
                      src='assets/img/portfolio/cabin.png'
                      alt='Log Cabin'
                    />

                    <p class='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Mollitia neque assumenda ipsam nihil, molestias
                      magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod
                      consequuntur itaque. Nam.
                    </p>
                    <button
                      class='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i class='fas fa-times fa-fw'></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class='portfolio-modal modal fade'
        id='portfolioModal1'
        tabindex='-1'
        role='dialog'
        aria-labelledby='#portfolioModal1Label'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl' role='document'>
          <div class='modal-content'>
            <button
              class='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i class='fas fa-times'></i>
              </span>
            </button>
            <div class='modal-body text-center'>
              <div class='container'>
                <div class='row justify-content-center'>
                  <div class='col-lg-8'>
                    <h2 class='portfolio-modal-title text-secondary mb-0'>
                      Tasty Cake
                    </h2>

                    <div class='divider-custom'>
                      <div class='divider-custom-line'></div>
                      <div class='divider-custom-icon'>
                        <i class='fas fa-star'></i>
                      </div>
                      <div class='divider-custom-line'></div>
                    </div>
                    <img
                      class='img-fluid rounded mb-5'
                      src='assets/img/portfolio/cake.png'
                      alt='Tasty Cake'
                    />

                    <p class='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Mollitia neque assumenda ipsam nihil, molestias
                      magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod
                      consequuntur itaque. Nam.
                    </p>
                    <button
                      class='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i class='fas fa-times fa-fw'></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class='portfolio-modal modal fade'
        id='portfolioModal2'
        tabindex='-1'
        role='dialog'
        aria-labelledby='#portfolioModal2Label'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl' role='document'>
          <div class='modal-content'>
            <button
              class='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i class='fas fa-times'></i>
              </span>
            </button>
            <div class='modal-body text-center'>
              <div class='container'>
                <div class='row justify-content-center'>
                  <div class='col-lg-8'>
                    <h2 class='portfolio-modal-title text-secondary mb-0'>
                      Circus Tent
                    </h2>

                    <div class='divider-custom'>
                      <div class='divider-custom-line'></div>
                      <div class='divider-custom-icon'>
                        <i class='fas fa-star'></i>
                      </div>
                      <div class='divider-custom-line'></div>
                    </div>
                    <img
                      class='img-fluid rounded mb-5'
                      src='assets/img/portfolio/circus.png'
                      alt='Circus Tent'
                    />

                    <p class='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Mollitia neque assumenda ipsam nihil, molestias
                      magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod
                      consequuntur itaque. Nam.
                    </p>
                    <button
                      class='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i class='fas fa-times fa-fw'></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class='portfolio-modal modal fade'
        id='portfolioModal3'
        tabindex='-1'
        role='dialog'
        aria-labelledby='#portfolioModal3Label'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl' role='document'>
          <div class='modal-content'>
            <button
              class='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i class='fas fa-times'></i>
              </span>
            </button>
            <div class='modal-body text-center'>
              <div class='container'>
                <div class='row justify-content-center'>
                  <div class='col-lg-8'>
                    <h2 class='portfolio-modal-title text-secondary mb-0'>
                      Controller
                    </h2>

                    <div class='divider-custom'>
                      <div class='divider-custom-line'></div>
                      <div class='divider-custom-icon'>
                        <i class='fas fa-star'></i>
                      </div>
                      <div class='divider-custom-line'></div>
                    </div>
                    <img
                      class='img-fluid rounded mb-5'
                      src='assets/img/portfolio/game.png'
                      alt='Controller'
                    />

                    <p class='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Mollitia neque assumenda ipsam nihil, molestias
                      magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod
                      consequuntur itaque. Nam.
                    </p>
                    <button
                      class='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i class='fas fa-times fa-fw'></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class='portfolio-modal modal fade'
        id='portfolioModal4'
        tabindex='-1'
        role='dialog'
        aria-labelledby='#portfolioModal4Label'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl' role='document'>
          <div class='modal-content'>
            <button
              class='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i class='fas fa-times'></i>
              </span>
            </button>
            <div class='modal-body text-center'>
              <div class='container'>
                <div class='row justify-content-center'>
                  <div class='col-lg-8'>
                    <h2 class='portfolio-modal-title text-secondary mb-0'>
                      Locked Safe
                    </h2>

                    <div class='divider-custom'>
                      <div class='divider-custom-line'></div>
                      <div class='divider-custom-icon'>
                        <i class='fas fa-star'></i>
                      </div>
                      <div class='divider-custom-line'></div>
                    </div>
                    <img
                      class='img-fluid rounded mb-5'
                      src='assets/img/portfolio/safe.png'
                      alt='Locked Safe'
                    />

                    <p class='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Mollitia neque assumenda ipsam nihil, molestias
                      magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod
                      consequuntur itaque. Nam.
                    </p>
                    <button
                      class='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i class='fas fa-times fa-fw'></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class='portfolio-modal modal fade'
        id='portfolioModal5'
        tabindex='-1'
        role='dialog'
        aria-labelledby='#portfolioModal5Label'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-xl' role='document'>
          <div class='modal-content'>
            <button
              class='close'
              type='button'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i class='fas fa-times'></i>
              </span>
            </button>
            <div class='modal-body text-center'>
              <div class='container'>
                <div class='row justify-content-center'>
                  <div class='col-lg-8'>
                    <h2 class='portfolio-modal-title text-secondary mb-0'>
                      Submarine
                    </h2>

                    <div class='divider-custom'>
                      <div class='divider-custom-line'></div>
                      <div class='divider-custom-icon'>
                        <i class='fas fa-star'></i>
                      </div>
                      <div class='divider-custom-line'></div>
                    </div>
                    <img
                      class='img-fluid rounded mb-5'
                      src='assets/img/portfolio/submarine.png'
                      alt='Submarine'
                    />

                    <p class='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Mollitia neque assumenda ipsam nihil, molestias
                      magnam, recusandae quos quis inventore quisquam velit
                      asperiores, vitae? Reprehenderit soluta, eos quod
                      consequuntur itaque. Nam.
                    </p>
                    <button
                      class='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i class='fas fa-times fa-fw'></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioItem