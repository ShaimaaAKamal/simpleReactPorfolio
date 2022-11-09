export class General{
    hideLabel(labelElement){
        labelElement.style.opacity='0';
        labelElement.style.transform='translateY(120%)';
    }

   showlabel(labelElement){
    labelElement.style.opacity='1';
    labelElement.style.transform='translateY(0%)';
    labelElement.style.color='#1CBB9D';

   }
}