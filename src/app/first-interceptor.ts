import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class FirstInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log("First Interceptor Executed");
        let requestSentTime= new Date();
        console.log(requestSentTime)

        return next.handle(req)
        // ***********************this code is related to response interceptor********************
        // .pipe(
        //     tap(response => {
        //         if(response?.type != 0){
        //             console.log("Response Intercepted")
        //         let responseReceivedTime = new Date();
        //         console.log(responseReceivedTime);
        //         //new Date() - requestSentTime
        //         // console.log("Response Intercepted")
        //         }
                
        //     })
        //     // console.log("Response intercepted")
        // )


    }
}