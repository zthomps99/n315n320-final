var _db = ""; 
var userExists = false;
var userFullName = "";

var MODEL = (function(){
    var homeContent = `      <div class="home">
    <div class="home-about">
        <div class="main-circle">
            <h1>The Jungle Cook</h1>
            <p>
                The home to various 
                recipes of your choice. 
                Add your own recipe 
                today and fill the world 
                with joy!
            </p>
        </div>
        <div class="sub-circle">
            <p>
                Want to be a Jungle Cook? Go ahead and the kitchen is yours!
            </p>
        </div>
    </div>
</div>`;
    var browseContent = `    <div class="browse">
    <div class="browse-recipes">
        <div class="browse-header">
            <h1>Recipes: Try some today!</h1>
        </div>
        <div class="recipe-holder">
            <div class="recipe-img">
                <img src="images/browse/recipe-pizza.png">
            </div>
            <div class="recipe-info">
                <h1>Supreme Pizza</h1>
                <p>
                    Make pizza night super 
                    duper out of this world with 
                    homemade pizza. This recipe 
                    is supreme with vegetables 
                    and two types of meat. Yum!
                </p>
                <div class="recipe-sub-info">
                    <img src="images/browse/time.svg" alt="time" class="social">
                    <p>1h 24min</p>
                </div>
                <div class="recipe-sub-info">
                    <img src="images/browse/servings.svg" alt="servings" class="social">
                    <p>4 servings</p>
                </div>
            </div>
        </div>
        <div class="recipe-holder">
            <div class="recipe-img">
                <img src="images/browse/recipe-burger.png">
            </div>
            <div class="recipe-info">
                <h1>Classic Burger</h1>
                <p>
                    Sink your teeth into a delicious 
                    restaurant-style, hamburger recipe 
                    made from lean beef. Skip the 
                    prepackaged patties and take the 
                    extra time to craft up your own, 
                    and that little extra effort will be 
                    worth it.
                </p>
                <div class="recipe-sub-info">
                    <img src="images/browse/time.svg" alt="time" class="social">
                    <p>30 min</p>
                </div>
                <div class="recipe-sub-info">
                    <img src="images/browse/servings.svg" alt="servings" class="social">
                    <p>4 servings</p>
                </div>
            </div>
        </div>
        <div class="recipe-holder">
            <div class="recipe-img">
                <img src="images/browse/recipe-pilaf.png">
            </div>
            <div class="recipe-info">
                <h1>Chicken Biryani</h1>
                <p>
                    Chicken Biryani is a bold and 
                    flavorful Indian dish with crazy 
                    tender bites of chicken with 
                    bell peppers in a deliciously 
                    spiced and fragrant rice.
                </p>
                <div class="recipe-sub-info">
                    <img src="images/browse/time.svg" alt="time" class="social">
                    <p>1h 15 min</p>
                </div>
                <div class="recipe-sub-info">
                    <img src="images/browse/servings.svg" alt="servings" class="social">
                    <p>6 servings</p>
                </div>
            </div>
        </div>
        <div class="recipe-holder">
            <div class="recipe-img">
                <img src="images/browse/recipe-chowmein.png">
            </div>
            <div class="recipe-info">
                <h1>Ch. Chow Mein</h1>
                <p>
                    A great Chow Mein comes 
                    down to the sauce - it takes 
                    more than just soy sauce and 
                    sugar! Jam packed with a 
                    surprising amount of hidden 
                    vegetables, customize this 
                    Chicken Chow Mein recipe 
                    using your protein of choice!
                </p>
            <div class="recipe-sub-info">
                <img src="images/browse/time.svg" alt="time" class="social">
                <p>20 min</p>
            </div>
            <div class="recipe-sub-info">
                <img src="images/browse/servings.svg" alt="servings" class="social">
                <p>4 servings</p>
            </div>
            </div>
        </div>
    </div>

    </div>`;
    var createRecipeContent = `        <div class="create-recipe">
    <div class="create-container">
        <p class="create-header">Hey Michael, create your recipe!</p>
        <div class="input-button">
            <input type="te xt" placeholder="Add Recipe Image">
            <button class="attach">Attach file</button>
        </div>
        <input type="text" placeholder="Recipe Name">
        <input type="text" placeholder="Recipe Description">
        <input type="text" placeholder="Recipe Total Time">
        <input type="text" placeholder="Recipe Serving Size">
        <p class="create-recipe-subtext">Enter Ingredients:</p>
        <input type="text" placeholder="Indgredient #1">
        <input type="text" placeholder="Indgredient #2">
        <div class="input-button">
            <input type="text" placeholder="Instruction #3">
            <button class="add">+</button>
        </div>
        <p class="create-recipe-subtext">Enter Instructions:</p>
        <input type="text" placeholder="Instruction #1">
        <input type="text" placeholder="Instruction #2">
        <div class="input-button">
            <input type="text" placeholder="Instruction #3">
            <button class="add">+</button>
        </div>
        <button>Create Recipe</button>
    </div>
</div>`;
    var yourRecipeContent = `    <div class="your-recipes">
    <div class="list-recipes">
        <div class="your-recipes-header">
            <h1>Hey <div class="name">Michael</div>, here are your recipes!</h1>
        </div>
        <div class="your-recipe-holder">
            <div class="your-recipe-img">
                <img src="images/browse/recipe-pizza.png">
                <button id="viewrecipes"><a href="/viewrecipes.html">View</a></button>
            </div>
            <div class="your-recipe-info">
                <h1>Supreme Pizza</h1>
                <p>
                    Make pizza night super 
                    duper out of this world with 
                    homemade pizza. This recipe 
                    is supreme with vegetables 
                    and two types of meat. Yum!
                </p>
                <div class="your-recipe-sub-info">
                    <img src="images/browse/time.svg" alt="time" class="social">
                    <p>1h 24min</p>
                </div>
                <div class="your-recipe-sub-info">
                    <img src="images/browse/servings.svg" alt="servings" class="social">
                    <p>4 servings</p>
                </div>
            </div>
        </div>
        <div class="your-recipes-button">
            <button>Edit Recipe</button>
            <button>Delete</button>
        </div>
    </div>
</div>`;
    var loginContent = `    <div class="login">
    <div class="form-container">
        <div class="login-form">
            <p>Login Here!</p>
            <input type="email" placeholder="Email Address" id="log-email">
            <input type="password" placeholder="Password" id="log-pw">
            <button class="login-form-button" id="login-form-button" onclick="login()">Login</button>
        </div>
        <div class="signup-form">
            <p class="subtext">don't have an account?</p>
            <p>Sign Up!</p>
            <input type="text" placeholder="First Name" id="fName">
            <input type="text" placeholder="Last Name" id="lName">
            <input type="email" placeholder="Email Address" id="email">
            <input type="password" placeholder="Password" id="pw">
            <button onclick="signUp()" id="signUpBtn" value="Sign Up">Sign Up</button>
        </div>
    </div>
    </div>`;

    var _changePageContent = function(pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));
    };

    return {
        changePageContent: _changePageContent,
    };
})();