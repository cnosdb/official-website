import clsx from 'clsx';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main.css'

export default function MainPage() {

  const langCodes = {
    rust: `
<span class="token keyword">use</span> <span class="token namespace">reqwest<span class="token punctuation">::</span>header<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Authorization</span><span class="token punctuation">,</span> <span class="token class-name">HeaderValue</span><span class="token punctuation">,</span> <span class="token constant">ACCEPT</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token namespace">std<span class="token punctuation">::</span>error<span class="token punctuation">::</span></span><span class="token class-name">Error</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[tokio::main]</span>
<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Box</span><span class="token operator">&lt;</span><span class="token keyword">dyn</span> <span class="token class-name">Error</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> username <span class="token operator">=</span> <span class="token string">"&lt;username&gt;"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> password <span class="token operator">=</span> <span class="token string">"&lt;password&gt;"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cdb_url <span class="token operator">=</span> <span class="token string">"&lt;cnosdb_url&gt;"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cdb_port <span class="token operator">=</span> <span class="token string">"&lt;cnosdb_port&gt;"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> database_name <span class="token operator">=</span> <span class="token string">"&lt;database_name&gt;"</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sql_statement <span class="token operator">=</span> <span class="token string">"&lt;your SQL statement&gt;"</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token macro property">format!</span><span class="token punctuation">(</span>
        <span class="token string">"http://{}:{}/api/v1/sql?db={}&amp;pretty=true"</span><span class="token punctuation">,</span>
        cdb_url<span class="token punctuation">,</span> cdb_port<span class="token punctuation">,</span> database_name
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token namespace">reqwest<span class="token punctuation">::</span></span><span class="token class-name">Client</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> client
        <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>url<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token constant">ACCEPT</span><span class="token punctuation">,</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span>
            <span class="token class-name">Authorization</span><span class="token punctuation">(</span><span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">"Basic {}"</span><span class="token punctuation">,</span> <span class="token namespace">base64<span class="token punctuation">::</span></span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token macro property">format!</span><span class="token punctuation">(</span><span class="token string">"{}:{}"</span><span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span>sql_statement<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token keyword">await</span><span class="token operator">?</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"{}"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">await</span><span class="token operator">?</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Ok</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>    
    `,
    python: `
<span class="token keyword">import</span> requests

username <span class="token operator">=</span> <span class="token string">"&lt;username&gt;"</span>
password <span class="token operator">=</span> <span class="token string">"&lt;password&gt;"</span>
cnosdb_url <span class="token operator">=</span> <span class="token string">"&lt;cnosdb_url&gt;"</span>
cnosdb_port <span class="token operator">=</span> <span class="token string">"&lt;cnosdb_port&gt;"</span>
database_name <span class="token operator">=</span> <span class="token string">"&lt;database_name&gt;"</span>
sql_statement <span class="token operator">=</span> <span class="token string">"&lt;your SQL statement&gt;"</span>

url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"http://</span><span class="token interpolation"><span class="token punctuation">{</span>cnosdb_url<span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span>cnosdb_port<span class="token punctuation">}</span></span><span class="token string">/api/v1/sql?db=</span><span class="token interpolation"><span class="token punctuation">{</span>database_name<span class="token punctuation">}</span></span><span class="token string">&amp;pretty=true"</span></span>
headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"Accept"</span><span class="token punctuation">:</span> <span class="token string">"application/json"</span><span class="token punctuation">}</span>
data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"query"</span><span class="token punctuation">:</span> sql_statement<span class="token punctuation">}</span>

response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token punctuation">,</span> auth<span class="token operator">=</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> json<span class="token operator">=</span>data<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>    
    `,
    golang: `
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"net/http"</span>
    <span class="token string">"bytes"</span>
    <span class="token string">"encoding/base64"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    username <span class="token operator">:=</span> <span class="token string">"&lt;username&gt;"</span>
    password <span class="token operator">:=</span> <span class="token string">"&lt;password&gt;"</span>
    url <span class="token operator">:=</span> <span class="token string">"http://&lt;cnosdb_url&gt;:&lt;cnosdb_port&gt;/api/v1/sql?db=&lt;database_name&gt;&amp;pretty=true"</span>
    sqlStatement <span class="token operator">:=</span> <span class="token string">"&lt;your SQL statement&gt;"</span>

    client <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Client<span class="token punctuation">{</span><span class="token punctuation">}</span>
    req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> bytes<span class="token punctuation">.</span><span class="token function">NewBufferString</span><span class="token punctuation">(</span>sqlStatement<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// add Authorization header</span>
    authStr <span class="token operator">:=</span> username <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> password
    encodedAuth <span class="token operator">:=</span> base64<span class="token punctuation">.</span>StdEncoding<span class="token punctuation">.</span><span class="token function">EncodeToString</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>authStr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> <span class="token string">"Basic "</span><span class="token operator">+</span>encodedAuth<span class="token punctuation">)</span>

    <span class="token comment">// add Accept header</span>
    req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">"Accept"</span><span class="token punctuation">,</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span>

    resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> resp<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// print response</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Status Code:"</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>StatusCode<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Response Body:"</span><span class="token punctuation">)</span>
    buf <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span>
    buf<span class="token punctuation">.</span><span class="token function">ReadFrom</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>Body<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
    `,
    java: `
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStreamReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">HttpURLConnection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URL</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CurlToJava</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">"&lt;username&gt;"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">"&lt;password&gt;"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> cnosdbUrl <span class="token operator">=</span> <span class="token string">"&lt;cnosdb_url&gt;"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> cnosdbPort <span class="token operator">=</span> <span class="token string">"&lt;cnosdb_port&gt;"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> dbName <span class="token operator">=</span> <span class="token string">"&lt;database_name&gt;"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sqlStatement <span class="token operator">=</span> <span class="token string">"&lt;your SQL statement&gt;"</span><span class="token punctuation">;</span>
        
        <span class="token class-name">String</span> apiUrl <span class="token operator">=</span> <span class="token string">"http://"</span> <span class="token operator">+</span> cnosdbUrl <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> cnosdbPort <span class="token operator">+</span> <span class="token string">"/api/v1/sql?db="</span> <span class="token operator">+</span> dbName <span class="token operator">+</span> <span class="token string">"&amp;pretty=true"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> auth <span class="token operator">=</span> username <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> password<span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> encodedAuth <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>auth<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> authHeaderValue <span class="token operator">=</span> <span class="token string">"Basic "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>encodedAuth<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpURLConnection</span> connection <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpURLConnection</span><span class="token punctuation">)</span> url<span class="token punctuation">.</span><span class="token function">openConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">setRequestMethod</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token string">"Accept"</span><span class="token punctuation">,</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">setRequestProperty</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> authHeaderValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">setDoOutput</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> requestBody <span class="token operator">=</span> sqlStatement<span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>requestBody<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>connection<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> line<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        bufferedReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    `,
  };

  const [lang, setLang] = useState<'rust' | 'python' | 'golang' | 'java'>('rust')
  const codeContent = langCodes[lang]

  return (
    <main>
      <div id="homepage-app">
        <div className="cnos-container cnos-introduce">
          <Container>
            <div className="flex cons-main-inner-container align-items-center">
              <div className="cloud-warpper">
                <h2>
                  <img
                    src="https://cnosdb.com/wp-content/uploads/2023/04/logo-cloud.png"
                    alt="logo-cloud"
                    className="logo-cloud"
                  />
                </h2>
                <h2 className="cloud-title flex">
                  <span>Serverless,</span>
                  <span>Scalable and Cost-Saving</span>
                </h2>
                <div className="cloud-desc">
                  <p className="cloud-desc-item">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="6.0002"
                        cy="5.99995"
                        r="4.5"
                        stroke="white"
                        strokeWidth="0.6"
                      />
                      <circle
                        cx="6.0001"
                        cy="5.99998"
                        r="2.4"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>{' '}
                    Leverages cloud infrastructure and integrates with
                    cloud-native ecosystems.
                  </p>
                  <p className="cloud-desc-item">
                    {' '}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="6.0002"
                        cy="5.99995"
                        r="4.5"
                        stroke="white"
                        strokeWidth="0.6"
                      />
                      <circle
                        cx="6.0001"
                        cy="5.99998"
                        r="2.4"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>{' '}
                    Elastic scaling of storage and computing.
                  </p>

                  <p className="cloud-desc-item">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="6.0002"
                        cy="5.99995"
                        r="4.5"
                        stroke="white"
                        strokeWidth="0.6"
                      />
                      <circle
                        cx="6.0001"
                        cy="5.99998"
                        r="2.4"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>{' '}
                    Multi-tenant and pay-as-you-go for lower costs.
                  </p>

                  <p className="cloud-desc-item">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="6.0002"
                        cy="5.99995"
                        r="4.5"
                        stroke="white"
                        strokeWidth="0.6"
                      />
                      <circle
                        cx="6.0001"
                        cy="5.99998"
                        r="2.4"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>{' '}
                    Free engineers from heavy workloads and easily manage cloud
                    services.
                  </p>

                  <p className="cloud-desc-item">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="6.0002"
                        cy="5.99995"
                        r="4.5"
                        stroke="white"
                        strokeWidth="0.6"
                      />
                      <circle
                        cx="6.0001"
                        cy="5.99998"
                        r="2.4"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>{' '}
                    Integrated with cloud-native OLAP and AI-driven modern data
                    ecosystem.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="img-cloud"
                  src="https://cnosdb.com/wp-content/uploads/2023/04/cloudcloud.png"
                  alt="cloud"
                />
              </div>
            </div>
            <div className="flex function-box">
              <a
                href="https://www.cnosdb.com/cnosdb-cloud-waitlist/"
                target="_blank"
                className="btn-cloud btn-primary-cloud btn-primary-cloud-hover"
              >
                Get CnosDB Cloud{' '}
                <img
                  src="https://cnosdb.com/wp-content/uploads/2023/04/arrow-right.svg"
                  alt="arrow"
                />
              </a>
              <a
                href="https://www.cnosdb.com/cnosdb-cloud-waitlist/"
                target="_blank"
                className="btn-cloud btn-outline-primay-cloud ml-24"
              >
                Book a demo{' '}
                <img
                  src="https://cnosdb.com/wp-content/uploads/2023/04/arrow-right.svg"
                  alt="arrow"
                />
              </a>
            </div>
            <h3 className="cloud-subtitle">
              <span>High Performance, </span>
              <span>High Compression Rate, </span>
              <span>High Ease-Of-Use</span>
            </h3>
            <div className="flex cons-main-inner-container cloud-high">
              <div className="cloud-high-performance">
                <div className="cloud-high-title">
                  <img
                    src="https://cnosdb.com/wp-content/uploads/2023/04/high-performance.png"
                    alt="high-performance"
                  />{' '}
                  High Performance
                </div>
                <p className="cloud-high-desc">
                  Support very large data size; fast batch writing; ultra-high
                  data compression ratio
                </p>
              </div>
              <div>
                <div className="cloud-high-title">
                  <img
                    src="https://cnosdb.com/wp-content/uploads/2023/04/high-use.png"
                    alt="high-use"
                  />{' '}
                  High Ease of Use
                </div>
                <p className="cloud-high-desc">
                  Compatible with mainstream timing database; rich calculation
                  functions; excellent ecosystem
                </p>
              </div>
              <div>
                <div className="cloud-high-title">
                  <img
                    src="https://cnosdb.com/wp-content/uploads/2023/04/open-source.png"
                    alt="high-source"
                  />{' '}
                  100% Open Source
                </div>
                <p className="cloud-high-desc">
                  Stand-alone, distributed and ecological tools, etc. all adopt
                  the AGPL-3.0 open source protocol
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="cnos-container cnos-start">
          <Container>
            <h3 className="cloud-subtitle mt0">
              <span>Get started with</span>
              <span>CnosDB in minutes</span>
            </h3>
            <p className="text-center">
              Simply install CnosDB using Docker with just one command:
            </p>
            <div className="cnos-code-box">
              docker run --name cnosdb -d cnosdb/cnosdb:v2.2.0 cnosdb run -M
              singleton
            </div>
            <p className="cnos-start-info">
              Alternatively, you can install CnosDB on other{' '}
              <a
                className="highlight"
                href="https://www.cnosdb.com/download"
                target="_blank"
              >
                installation options
              </a>
              .
            </p>
          </Container>
        </div>

        <div className="cnos-container develop-bg-bottom">
          <Container className="inner-container enginner flex cons-main-inner-container align-items-center">
            <div className="enginner-box-left">
              <h3 className="cloud-subtitle">
                <span>Engineers' favorite</span>
                <span>programming </span>
                <span>languages</span>
              </h3>
              <p>
                CnosDB provides fast and intuitive developer experience with
                support for popular programming languages like Java, Python,
                Rust, and Golang. Our community offers additional drivers.
              </p>
            </div>
            <div className="enginner-box-right">
              <ul className="tabs flex justify-content-around align-items-center">
                <li
                  className={clsx('btn-cloud', lang === 'rust' ? 'btn-primary-cloud' : 'btn-default-cloud')}
                  onClick={() => setLang('rust')}
                >
                  <img
                    className="white"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/rust.svg"
                    alt="Rust"
                  />
                  <img
                    className="black"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/rust-dark.svg"
                    alt="Rust"
                  />{' '}
                  Rust
                </li>
                <li
                  className={clsx('btn-cloud', lang === 'python' ? 'btn-primary-cloud' : 'btn-default-cloud')}
                  onClick={() => setLang('python')}
                >
                  <img
                    className="white"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/python-white.svg"
                    alt="Python"
                  />
                  <img
                    className="black"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/python.svg"
                    alt="Python"
                  />{' '}
                  Python
                </li>
                <li
                  className={clsx('btn-cloud', lang === 'golang' ? 'btn-primary-cloud' : 'btn-default-cloud')}
                  onClick={() => setLang('golang')}
                >
                  <img
                    className="white"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/golang-white.svg"
                    alt="Golang"
                  />
                  <img
                    className="black"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/golang.svg"
                    alt="Golang"
                  />{' '}
                  Golang
                </li>
                <li
                  className={clsx('btn-cloud', lang === 'java' ? 'btn-primary-cloud' : 'btn-default-cloud')}
                  onClick={() => setLang('java')}
                >
                  <img
                    className="white"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/java-white.svg"
                    alt="Java"
                  />
                  <img
                    className="black"
                    src="https://cnosdb.com/wp-content/uploads/2023/04/java.svg"
                    alt="Java"
                  />{' '}
                  Java
                </li>
              </ul>
              <div className="code-content">
                <pre style={{ tabSize: '2', lineHeight: '21px' }}>
                  <code
                    dangerouslySetInnerHTML={{ __html: codeContent }}
                  ></code>
                </pre>
              </div>
            </div>
          </Container>
        </div>

        <div className="cnos-container cnos-joinus">
          <Container>
            <div className="cons-main-inner-container flex  align-items-center">
              <div className="img-joinus-box">
                <img
                  className="img-joinus"
                  src="https://cnosdb.com/wp-content/uploads/2023/04/background.svg"
                  alt="join us"
                />
                <a
                  className="img-joinus-github"
                  href="https://github.com/cnosdb/cnosdb"
                  target="_blank"
                ></a>
                <a
                  className="img-joinus-twitter"
                  href="https://twitter.com/CnosDB"
                  target="_blank"
                ></a>
                <a
                  className="img-joinus-slack"
                  href="https://discord.com/invite/D8cB4WGpP4"
                  target="_blank"
                ></a>
              </div>
              <div className="cnos-joinus-right">
                <h3 className="cloud-joinus-title">
                  Join our developer community
                </h3>
                <p className="cloud-joinus-desc">
                  Welcome to this cloud-native database systems, which is now
                  open-source.
                </p>
                <div className="flex align-items-center join-mode">
                  <a
                    href="https://github.com/cnosdb/cnosdb"
                    target="_blank"
                    className="mr21 flex align-items-center"
                  >
                    <svg
                      width="46"
                      height="46"
                      style={{ marginRight: '8px' }}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_b_102_6508)">
                        <circle
                          cx="23"
                          cy="23"
                          r="23"
                          fill="url(#paint0_linear_102_6508)"
                          fillOpacity="0.5"
                        />
                        <circle
                          cx="23"
                          cy="23"
                          r="22.75"
                          stroke="url(#paint1_linear_102_6508)"
                          strokeWidth="0.5"
                        />
                      </g>
                      <path
                        d="M22.0224 33.6398C21.4867 33.6417 20.9721 33.4311 20.5913 33.0543C20.2105 32.6775 19.9946 32.1651 19.9909 31.6294L19.9829 30.1905C15.9902 31.0589 15.148 28.497 15.148 28.497C14.495 26.8388 13.5542 26.3981 13.5542 26.3981C12.2522 25.5066 13.6528 25.5247 13.6528 25.5247C15.0927 25.6253 15.8514 27.0038 15.8514 27.0038C17.1312 29.1974 19.2091 28.5634 20.0271 28.1972C20.1559 27.2695 20.5282 26.6366 20.9388 26.2773C17.7511 25.9151 14.4004 24.6835 14.4004 19.1856C14.4004 17.6189 14.9609 16.339 15.8795 15.3338C15.7306 14.9715 15.2396 13.5125 16.0184 11.5363C16.0184 11.5363 17.2238 11.151 19.9658 13.0074C21.1366 12.6888 22.3445 12.5264 23.5579 12.5244C24.7764 12.5295 26.005 12.6884 27.1521 13.0074C29.892 11.151 31.0955 11.5363 31.0955 11.5363C31.8763 13.5135 31.3852 14.9726 31.2363 15.3338C32.156 16.338 32.7134 17.6189 32.7134 19.1856C32.7134 24.6976 29.3557 25.9111 26.161 26.2663C26.6752 26.712 27.134 27.5844 27.134 28.9237C27.134 30.8445 27.127 31.6284 27.127 31.6284C27.1232 32.1638 26.9076 32.676 26.5273 33.0529C26.147 33.4299 25.6329 33.6409 25.0974 33.6398H22.0224Z"
                        fill="white"
                      />
                      <defs>
                        <filter
                          id="filter0_b_102_6508"
                          x="-4"
                          y="-4"
                          width="54"
                          height="54"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_102_6508"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_102_6508"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_102_6508"
                          x1="23"
                          y1="0"
                          x2="23"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1C104A" />
                          <stop offset="1" stopColor="#584B88" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_102_6508"
                          x1="23"
                          y1="0"
                          x2="23"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A69DD8" />
                          <stop offset="1" stopColor="#403A5E" />
                        </linearGradient>
                      </defs>
                    </svg>{' '}
                    GitHub
                  </a>
                  <a
                    href="https://discord.com/invite/D8cB4WGpP4"
                    target="_blank"
                    className="mr21 flex align-items-center"
                  >
                    <svg
                      width="46"
                      height="46"
                      style={{ marginRight: '8px' }}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_b_504_21)">
                        <circle
                          cx="23"
                          cy="23"
                          r="23"
                          fill="url(#paint0_linear_504_21)"
                          fillOpacity="0.5"
                        />
                        <circle
                          cx="23"
                          cy="23"
                          r="22.75"
                          stroke="url(#paint1_linear_504_21)"
                          strokeWidth="0.5"
                        />
                      </g>
                      <path
                        d="M36.8954 29.0925C36.9477 29.8613 36.3933 30.1667 35.8598 30.5037C34.1651 31.6095 32.3658 32.5046 30.441 33.1365C30.1062 33.2418 29.9493 33.1786 29.761 32.9048C29.4053 32.3677 29.0811 31.8095 28.7463 31.2514C28.6103 31.0197 28.6626 30.946 28.8928 30.8512C29.4053 30.6406 29.9075 30.3984 30.3991 30.1351C30.5456 30.0614 30.9013 30.0298 30.7339 29.7455C30.6084 29.5348 30.3991 29.3137 30.033 29.4611C29.4158 29.7244 28.7777 29.9771 28.1396 30.1772C24.4364 31.3251 20.796 31.104 17.2393 29.6085C16.758 29.4085 16.4338 29.4085 16.1199 29.8613C16.7894 30.3563 17.574 30.6406 18.3481 30.9776C17.9924 31.6832 17.5845 32.3572 17.1346 32.9996C16.9882 33.2102 16.8417 33.2418 16.6116 33.1575C14.3939 32.4414 12.3644 31.3778 10.4396 30.0614C10.1676 29.8824 10.2095 29.6085 10.1153 29.3979C10.084 29.1768 10.0317 28.8503 10.0003 28.6292C10.084 27.892 10.0944 27.1443 10.0003 26.4071C10.0003 26.2491 10.0212 26.1438 10.0317 25.9964C10.0317 25.9648 10.0317 25.9332 10.0421 25.9121C10.0735 25.8489 10.0526 25.7436 10.0526 25.6804C10.1258 24.6695 10.0944 23.6374 10.3141 22.637C10.9313 19.8357 12.0402 17.245 13.6093 14.8545C13.8708 14.4543 14.2056 14.191 14.6345 14.012C16.0676 13.4222 17.5217 12.9062 19.1013 12.8114C19.6871 12.7693 20.0846 12.8641 20.3148 13.4328C20.5135 13.9277 20.9215 13.9909 21.5492 13.8224C22.8045 13.4854 24.133 13.5065 25.3988 13.8224C26.1101 14.0014 26.4972 13.8751 26.7169 13.3485C26.9156 12.8641 27.2818 12.7693 27.7734 12.8009C29.2903 12.9062 30.7025 13.359 32.1043 13.9067C32.7738 14.1699 33.2341 14.6017 33.6002 15.2125C34.2174 16.2656 34.8137 17.3398 35.3053 18.4666C36.0376 20.1727 36.6652 21.9103 36.8222 23.7848C36.8849 24.5115 36.8535 25.2487 36.9895 25.9753C36.9895 26.1333 37 26.2807 37 26.4387C36.9059 27.1337 36.8954 27.8183 36.9895 28.5133V28.7134L36.8954 29.0925ZM20.8483 22.2052C20.2311 21.4469 19.2373 21.131 18.369 21.4048C17.3752 21.7207 16.6534 22.637 16.5802 23.6901C16.5698 23.8164 16.5802 23.9323 16.5802 24.0587C16.5593 24.8695 16.8313 25.5646 17.4066 26.1333C18.2644 26.9968 19.6034 27.039 20.5135 26.2281C21.6642 25.2065 21.8107 23.3952 20.8483 22.2052ZM30.3573 23.4163C30.0748 22.1631 29.1124 21.31 27.9617 21.3206C26.2984 21.3311 25.1059 23.1319 25.608 24.8696C26.0265 26.3018 27.2608 27.0811 28.5789 26.7336C29.8447 26.3966 30.6711 24.8485 30.3573 23.4163Z"
                        fill="#5865F1"
                      />
                      <defs>
                        <filter
                          id="filter0_b_504_21"
                          x="-4"
                          y="-4"
                          width="54"
                          height="54"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_504_21"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_504_21"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_504_21"
                          x1="23"
                          y1="0"
                          x2="23"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1C104A" />
                          <stop offset="1" stopColor="#584B88" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_504_21"
                          x1="23"
                          y1="0"
                          x2="23"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A69DD8" />
                          <stop offset="1" stopColor="#403A5E" />
                        </linearGradient>
                      </defs>
                    </svg>{' '}
                    Discord
                  </a>
                  <a
                    href="https://twitter.com/CnosDB"
                    target="_blank"
                    className="mr21 flex align-items-center"
                  >
                    <svg
                      width="46"
                      height="46"
                      style={{ marginRight: '8px' }}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_b_102_6494)">
                        <circle
                          cx="23"
                          cy="23"
                          r="23"
                          fill="url(#paint0_linear_102_6494)"
                          fillOpacity="0.5"
                        />
                        <circle
                          cx="23"
                          cy="23"
                          r="22.75"
                          stroke="url(#paint1_linear_102_6494)"
                          strokeWidth="0.5"
                        />
                      </g>
                      <path
                        d="M34.6338 16.0245C33.7886 16.3891 32.8687 16.6515 31.9213 16.7537C32.8991 16.1709 33.6422 15.2511 33.993 14.1572C33.0897 14.6958 32.0677 15.0909 31.0042 15.2953C30.1424 14.3754 28.9187 13.8064 27.5624 13.8064C24.9521 13.8064 22.8527 15.9223 22.8527 18.5188C22.8527 18.8835 22.8969 19.2481 22.9687 19.5989C19.0601 19.3945 15.5741 17.5272 13.2566 14.6682C12.8478 15.3698 12.6157 16.1709 12.6157 17.0465C12.6157 18.6818 13.4472 20.1237 14.7151 20.9717C13.9416 20.9414 13.2124 20.7231 12.5853 20.3723V20.4303C12.5853 22.7203 14.204 24.6179 16.3614 25.0544C15.9664 25.1566 15.5437 25.2146 15.1211 25.2146C14.8145 25.2146 14.5245 25.1842 14.2317 25.1428C14.8283 27.0101 16.5658 28.3664 18.6347 28.4106C17.016 29.6784 14.9885 30.4243 12.787 30.4243C12.392 30.4243 12.0274 30.4104 11.6489 30.3662C13.7372 31.7059 16.215 32.4794 18.8833 32.4794C27.5458 32.4794 32.2859 25.303 32.2859 19.0741C32.2859 18.8697 32.2859 18.6652 32.2721 18.4608C33.1892 17.7896 33.993 16.9582 34.6338 16.0245Z"
                        fill="#2DAAE1"
                      />
                      <defs>
                        <filter
                          id="filter0_b_102_6494"
                          x="-4"
                          y="-4"
                          width="54"
                          height="54"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="2"
                          />
                          <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_102_6494"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_102_6494"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_102_6494"
                          x1="23"
                          y1="0"
                          x2="23"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1C104A" />
                          <stop offset="1" stopColor="#584B88" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_102_6494"
                          x1="23"
                          y1="0"
                          x2="23"
                          y2="46"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A69DD8" />
                          <stop offset="1" stopColor="#403A5E" />
                        </linearGradient>
                      </defs>
                    </svg>{' '}
                    Twitter
                  </a>
                </div>
                <div className="joinus-btn-box">
                  <a
                    href="https://www.cnosdb.com/community"
                    target="_blank"
                    className="btn-cloud btn-primary-cloud"
                  >
                    Join our community event
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </main >
  );
}
