
const{Component,mount,xml,onWillStart,onMounted,onWillPatch,onPatched,onWillRender,onRendered,onWillUnmount,onWillDestroy,onError,useState,reactive,useEnv} = owl;


const finalData = () =>{

    const apple = useEnv();
    return useState(apple.store);

}

class dataList{

    count = 0;
    updateCount(){
        this.count++;
    }
    getCount(){

        return this.count;
    }

}

class Second extends Component {
    static template = xml `
    <b> Second </b> <br/>
    <t t-esc = "this.bottle.getCount()" />
    `;

    setup(){
        this.bottle = finalData();
    }

    static props = ["fruit"];
}

class Root extends Component {

    static template = xml `
    <b> Hello </b> <br/>
    <Second fruit="cafe"/>
    <button t-on-click="clickMe"> Click </button> 
    `;

    abc = "apple";

    setup()
    {
        onWillStart(()=> console.log("will start"));
        onMounted(()=> console.log("mounted"));
        onWillPatch(()=> console.log("will patch"));
        onPatched(()=> console.log("patched"));
        onWillRender(()=> console.log("will render"));
        onRendered(()=> console.log("rendered"));
        onWillUnmount(()=> console.log("unmount"));
        onWillDestroy(()=>console.log(" will destroy"))
        onError(()=>console.log("Error"))

        this.cafe = useState({tea:3,coffee:4});
        this.cap = finalData();
    }

    clickMe()
    {   
        this.cap.updateCount();
        console.log("clicked");
    }


    static components = {Second};
}

const createData = ()=>{

    return reactive(new dataList)
}

const env = { store : createData()}

mount(Root, document.body, { dev: true, env });  // first mount runs

// props one component can send data to other componenet
