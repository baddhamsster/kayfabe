import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private loggedInSubject = new BehaviorSubject<boolean>(false);

    constructor() {}

    // Observable for components to subscribe to login state
    get isLoggedIn$(): Observable<boolean> {
        return this.loggedInSubject.asObservable();
    }

    // Set login state to true
    login(): void {
        this.loggedInSubject.next(true);
    }

    // Set login state to false
    logout(): void {
        this.loggedInSubject.next(false);
    }

    // Get current login state value
    get isLoggedIn(): boolean {
        return this.loggedInSubject.value;
    }
}