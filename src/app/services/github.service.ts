import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = '3f67104beb91e0cf3080';
  private client_secret = '53eb238496a9b938ecfc1e81ef54d1da256a2821';

  constructor(private _http: Http){
    console.log('Github Service Ready...');
    this.username = 'mikedavinci';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
}