testpage1
// src/app/github.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getRepoTree(owner: string, repo: string, sha: string) {
    const url = `${this.apiUrl}/repos/${owner}/${repo}/git/trees/${sha}`;
    // Include your PAT token in the request headers
    const headers = {
      Authorization: 'token YOUR_PAT_TOKEN'
    };
    return this.http.get(url, { headers });
  }
}
