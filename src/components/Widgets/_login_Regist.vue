<template>
    <div id="toggle_popup_login" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="toggle_popup_login" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="block-form-login">
                                <div class="page_title_account">
                                    <span>Create an account</span>
                                </div>
                                <p class="mb-15">Insert your account information: </p>
                                <form action="#" id="customer-form" class="js-customer-form" method="post">
                                    <section>
                                        <input type="hidden" name="id_customer" value="">

                                        <div class="form-group row no-gutters novform-firstname">
                                            <div class="col-md-8">
                                                <input class="form-control" name="firstname" type="text" value="" placeholder="First name" required="">
                                            </div>
                                        </div>

                                        <div class="form-group row no-gutters novform-lastname">
                                            <div class="col-md-8">
                                                <input class="form-control" name="lastname" type="text" value="" placeholder="Last name" required="">
                                            </div>
                                        </div>

                                        <div class="form-group row no-gutters novform-email">
                                            <div class="col-md-8">
                                                <input class="form-control" name="email" type="email" value="" placeholder="Email" required="">
                                            </div>
                                        </div>

                                        <div class="form-group row no-gutters novform-password">
                                            <div class="col-md-8">
                                                <div class="input-group js-parent-focus">
                                                    <input class="form-control js-child-focus js-visible-password" name="password" type="password" value="" placeholder="Password" required="">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group row no-gutters novform-newsletter">
                                            <div class="col-md-8">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                                    <label class="form-check-label badge" for="flexCheckChecked">
                                                        Sign up for our newsletter
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <footer class="form-footer clearfix">
                                        <div class="row no-gutters">
                                            <div class="col-md-10 offset-md-2">
                                                <input type="hidden" name="submitCreate" value="1">
                                                    <button class="btn btn-primary form-control-submit mb-30" data-link-action="save-customer" type="submit">
                                                        Register 
                                                    </button>
                                            </div>
                                        </div>
                                    </footer>
                                </form>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="block-form-login">
                                <section class="login-form">
                                    <div class="page_title_account"><span>Login</span></div>
                                </section>
                                <p class="mb-15">Login</p>
                                <div class="row no-gutters">
                                    <div class="col-md-10 offset-md-2">
                                    </div>
                                </div>
                                <form class="login-form-popup" action="">
                                    <input type="hidden" name="_token">
                                    <div class="form-group row no-gutters novform-email">
                                        <div class="col-md-8">
                                            <input class="form-control" name="email" type="email" value="" placeholder="Email" required="">
                                        </div>
                                    </div>
                                    <div class="form-group row no-gutters novform-password">
                                        <div class="col-md-8">
                                            <div class="input-group js-parent-focus">
                                                <input class="form-control js-child-focus js-visible-password" name="password" type="password" value="" placeholder="Password" required="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="forgot-password mt-25 mb-25">
                                        <i class="material-icons">email</i>&nbsp; Forgot your&nbsp;
                                        <a href="#" rel="nofollow">
                                            <span>Password</span>&nbsp;?
                                        </a>
                                    </div>
                                    <footer class="form-footer clearfix">
                                        <div class="row no-gutters">
                                            <div class="col-md-10 offset-md-2">
                                                <input type="hidden" name="submitCreate" value="1">
                                                    <button class="btn btn-primary form-control-submit mb-30" data-link-action="save-customer" type="submit">
                                                        Register 
                                                    </button>
                                            </div>
                                        </div>
                                    </footer>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    #toggle_popup_login .modal-dialog {
        min-width: 830px;
        .modal-content {
            border-radius: 10px;
            -webkit-box-shadow: 0 0 20px rgba(0,0,0,.55);
            -moz-box-shadow: 0 0 20px rgba(0,0,0,.55);
            -ms-box-shadow: 0 0 20px rgba(0,0,0,.55);
            -o-box-shadow: 0 0 20px rgba(0,0,0,.55);
            box-shadow: 0 0 20px rgba(0,0,0,.55);
            padding: 5px 15px 25px;
        }
        .modal-header button {
            background: none;
            color: #aaa;
            font-size: 2.5rem;
            font-weight: 100;
            top: 3px;
            right: 5px;
        }
    }
    .modal .modal-header {
        padding: 0;
        border-bottom: none;
    }
    .modal-body {
        position: relative;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 15px;
    }
    .block-form-login {
        max-width: 445px;
        border-radius: 10px;
        -webkit-box-shadow: 0 0 20px rgba(0,0,0,.15);
        -moz-box-shadow: 0 0 20px rgba(0,0,0,.15);
        -ms-box-shadow: 0 0 20px rgba(0,0,0,.15);
        -o-box-shadow: 0 0 20px rgba(0,0,0,.15);
        box-shadow: 0 0 20px rgba(0,0,0,.15);
        background: #fff;
        margin: auto;
    }
    .page_title_account {
        @include fontSize(1.5);
        font-weight: 900;
        color: #222;
        text-transform: uppercase;
        margin-bottom: 25px;
    }
    #toggle_popup_login {
        .block-form-login {

            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            -ms-box-shadow: none;
            -o-box-shadow: none;
            box-shadow: none;
            padding: 0;

            .page_title_account {
                padding-top: 15px;
                border-bottom: 1px solid #e9e9e9;
                margin-bottom: 22px;
                text-align: center;
            }
            .page_title_account {
                color: #222;
                text-align: left;
            }
            .page_title_account span {
                position: relative;
                padding-bottom: 5px;
                font-size: 1rem;
                font-family: Pop;
            }
            .page_title_account span {
                padding-bottom: 10px;
                &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                background-color: $WebGrn;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                transform: translateX(-50%);
                bottom: -1px;
                // font-family: Oxy;
            }
            &::before{
                left: 0;
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }

            }
            p{
                @include fontSize();
            }
            .col-md-8 {
            -webkit-box-flex: 0 0 100%;
            -moz-box-flex: 0 0 100%;
            -webkit-flex: 0 0 100%;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
        
        }
        .forgot-password {
            margin-top: 20px !important;
            margin-bottom: 29px !important;
        }
    }

    .block-form-login{

        .novform-firstname,
        .novform-lastname,
        .novform-email,
        .novform-password,
        .novform-birthday,
        .novform-company,
        .novform-siret
        {
            position: relative;
        }
        .form-control{
            padding: 1.375rem 0.75rem;
            @include fontSize(.75);
            @include f-F;
        }
        .forgot-password {
            @include fontSize();
            color: #bbb;
            i {
                vertical-align: middle;
                font-size: 16px;
                margin-bottom: 5px;
                color: $HeaderBar_with_Op;
            }
            a {
                color: #49ad00;
                font-weight: 700;
            }
        }
        
        .novform-firstname::before,
        .novform-lastname::before,
        .novform-email::before,
        .novform-password::before,
        .novform-birthday::before,
        .novform-company::before,
        .novform-siret::before
        {
            content: "";
            position: absolute;
            border-right: 1px solid #e5e5e8;
            width: 44px;
            height: 42px;
            background-color: #fff;
            left: 1px;
            top: 1px;
            z-index: 9;
            background-position: center center;
            background-repeat: no-repeat;

        }

        .novform-firstname.novform-firstname::before,
        .novform-firstname.novform-lastname::before,
        .novform-lastname.novform-firstname::before,
        .novform-lastname.novform-lastname::before,
        .novform-email.novform-firstname::before,
        .novform-email.novform-lastname::before,
        .novform-password.novform-firstname::before,
        .novform-password.novform-lastname::before, 
        .novform-birthday.novform-firstname::before, 
        .novform-birthday.novform-lastname::before, 
        .novform-company.novform-firstname::before, 
        .novform-company.novform-lastname::before, 
        .novform-siret.novform-firstname::before, 
        .novform-siret.novform-lastname::before
        {
            display: table;
            background-image: url(../../assets/svg/login/user.png);
        }
        .novform-firstname.novform-email::before,
        .novform-firstname.novform-email::before,
        .novform-lastname.novform-email::before,
        .novform-lastname.novform-email::before,
        .novform-email.novform-email::before,
        .novform-email.novform-email::before,
        .novform-password.novform-email::before,
        .novform-password.novform-email::before, 
        .novform-birthday.novform-email::before, 
        .novform-birthday.novform-email::before, 
        .novform-company.novform-email::before, 
        .novform-company.novform-email::before, 
        .novform-siret.novform-email::before, 
        .novform-siret.novform-email::before

        {
            background-image: url(../../assets/svg/login/email.png);
        }

        .novform-firstname.novform-password::before,
        .novform-firstname.novform-password::before,
        .novform-lastname.novform-password::before,
        .novform-lastname.novform-password::before,
        .novform-email.novform-password::before,
        .novform-email.novform-password::before,
        .novform-password.novform-password::before,
        .novform-password.novform-password::before, 
        .novform-birthday.novform-password::before, 
        .novform-birthday.novform-password::before, 
        .novform-company.novform-password::before, 
        .novform-company.novform-password::before, 
        .novform-siret.novform-password::before, 
        .novform-siret.novform-password::before
        {
            background-image: url(../../assets/svg/login/pass.png);    
        }

        .novform-firstname::after,
        .novform-lastname::after,
        .novform-email::after,
        .novform-password::after,
        .novform-birthday::after,
        .novform-company::after,
        .novform-siret::after
        {
            content: "";
            position: absolute;
            z-index: 10;
            width: 6px;
            height: 8px;
            left: 44px;
            top: 20px;
            background-image: url(../../assets/svg/login/inputAft.png);
        }
        .col-md-8 
        {
            max-width: 320px;
        }

        .novform-firstname input,
        .novform-lastname input,
        .novform-email input,
        .novform-password input,
        .novform-birthday input,
        .novform-company input,
        .novform-siret input 
        {
            padding-left: 70px;
            // font-family: Oxy;
        }

        .novform-newsletter {
            margin-top: 20px;
            margin-bottom: 25px;
        }
        
        .form-footer {
            .col-md-10 {
                .btn {
                    margin-left: 0 !important;
                    margin-bottom: 0 !important;
                    width: 100% !important;
                    @include fontSize(1);
                    text-align: center;
                    height: 40px !important;
                    line-height: 40px !important;
                    border-radius: 3px;
                    background-color: $HeaderBar_with_Op;
                    background-color: #105caac7;
                    box-shadow: 0 4px 3px -1px #105caa91;
                }
                
                button {
                    max-width: 120px;
                    padding-left: 15px;
                    padding-right: 15px;
                }

            }
            .novform-newsletter label {
                font-weight: 550;
                font-size: 1rem;
            }
        }
        
        .col-md-8 {
            max-width: 320px;
        }
    }
    
</style>

