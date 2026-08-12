body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.dropdown {
    position: relative;
}

.boton {
    background: #2196f3;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    cursor: pointer;
    width: 230px;
    text-align: left;
}

.menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 230px;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
}

.menu a {
    display: block;
    padding: 15px;
    color: #555;
    text-decoration: none;
    border-bottom: 1px solid #eee;
}

.menu a:hover {
    background: #f0f0f0;
    color: #2196f3;
}

.dropdown:hover .menu {
    display: block;
}