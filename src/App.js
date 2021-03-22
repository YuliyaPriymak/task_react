import React, {Component} from 'react';
import FormInput from "./components/FormInput";

class App extends Component {

    state = {
        word: '',
        array: []
    }

    onInputChange = (e) => {
        this.setState({word: e.target.value});
    }

    addPoints = (e) => {
        const {word} = this.state;
        e.preventDefault();
        let str = word;
        let arr = []
        let arrOfStr = str.split('');


        arr.push(arrOfStr.join('.'))

        for (let i = 1; i < str.length; i++) {
            let start = str.slice(0, i) + '.';
            let end = str.slice(i, str.length);
            let sum = start + end;
            arr.push(sum)
        }

        for (let i = 3; i < str.length; i++) {
            let start = str.slice(0, i).split('').join('.');
            let end = str.slice(i, str.length);
            let sum = start + end
            arr.push(sum)
        }

        for (let i = str.length - 1; i > 1; i--) {
            let end = str.slice(str.length - i).split('').join('.')
            let start = str.slice(0, str.length - i);
            let sum = start + end
            arr.push(sum)
        }

        for (let i = 1; i < (str.length); i++) {
            for (let j = 0; j < (str.length - (i + 2)); j++) {
                let y = str.split('');
                let q = y.splice((j), arrOfStr.length - (j + i));
                y.splice(j, 0, ...(q.join('.')));
                arr.push(y.join(''))
            }
        }

        for (let i = 1; i < (str.length - 2); i++) {
            for (let j = 1; j < (str.length - i); j++) {
                let x = str.split('');
                let y = x.splice(j, x.length - (i + j));
                y.unshift('.');
                y.push('.');
                x.splice(j, 0, ...y);
                arr.push(x.join(''))
            }
        }
        let arrWithUniqStr = [...new Set(arr.map(a => a))]
        this.setState({
            array: arrWithUniqStr,
            word: ''
        })

    }

    render() {
        return (
            <div className='container'>
                <FormInput
                    word={this.state.word}
                    onInputChange={this.onInputChange}
                    addPoints={this.addPoints}
                />

                {!!this.state.array.length && (
                    <div>
                        <ul className="list-group">
                            {this.state.array.map(el => <li className="list-group-item">{el}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default App;