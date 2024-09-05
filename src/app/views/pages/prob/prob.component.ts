import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, CardGroupComponent } from '@coreui/angular';

@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CommonModule,
    FormsModule,
    MatRadioModule,
    CardComponent,
    CardBodyComponent,
    CardGroupComponent,
  ],
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.scss'
})
export class ProbComponent implements OnInit {
  constructor(
    private router: Router

  ){}
  ngOnInit(): void {
  }
  inputContent : string=`فيلا قريبة من التجمع الخامس`
  emailContent: string = `عزيزي [اسم العميل]،
  نحن في [اسم الشركة] نسعى دائمًا لتقديم أفضل الحلول التي تلبي احتياجاتك وتجعل حياتك أسهل. لذلك، يسعدنا أن نعلن عن إطلاق ميزات جديدة ومثيرة في منصتنا!
  ما الجديد؟
  ميزة X: التي تتيح لك [وصف مختصر للميزة وفائدتها].
  ميزة Y: لتمكينك من [وصف مختصر للميزة وفائدتها].
  ميزة Z: التي تساعدك على [وصف مختصر للميزة وفائدتها].
  لماذا تختار [اسم الشركة]؟
  خدمة عملاء متميزة: نحن هنا لدعمك على مدار الساعة.
  أسعار تنافسية: احصل على أفضل قيمة مقابل ما تدفعه.
  أمان وثقة: نحن نحافظ على سرية معلوماتك وأمانها.
  عرض خاص! احصل على خصم بنسبة [نسبة الخصم]% عند استخدام الكود NEWFEATURES أثناء عملية الشراء. العرض ساري حتى [تاريخ انتهاء العرض].
  لا تفوت الفرصة! انقر هنا للاكتشاف الآن: [رابط الموقع]
  إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، لا تتردد في الاتصال بنا على [بيانات الاتصال].
  شكرًا لاختيارك [اسم الشركة]. نحن نتطلع إلى خدمتك وتقديم أفضل تجربة ممكنة لك.
  مع أطيب التحيات، فريق [اسم الشركة]`;
  NavigateToSelectTionHouse(){
    this.router.navigate(['/selection-house']);
  }
  NavigateToNextProb() {
    localStorage.setItem('emailContent', this.emailContent);
    localStorage.setItem('inputContent', this.inputContent);
    this.router.navigate(['/next-prob'])
  }
}
