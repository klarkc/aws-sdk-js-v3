/// <reference types="node" />
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { InvokeAsyncRequest, InvokeAsyncResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
declare type InvokeAsyncCommandInputType = Omit<InvokeAsyncRequest, "InvokeArgs"> & {
    /**
     * For *`InvokeAsyncRequest["InvokeArgs"]`*, see {@link InvokeAsyncRequest.InvokeArgs}.
     */
    InvokeArgs: InvokeAsyncRequest["InvokeArgs"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `InvokeAsyncRequest` interface. There are more parameters than `InvokeArgs` defined in {@link InvokeAsyncRequest}
 */
export interface InvokeAsyncCommandInput extends InvokeAsyncCommandInputType {
}
export interface InvokeAsyncCommandOutput extends InvokeAsyncResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <important>
 *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
 *          </important>
 *          <p>Invokes a function asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeAsyncCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeAsyncCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new InvokeAsyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeAsyncCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InvokeAsyncCommand extends $Command<InvokeAsyncCommandInput, InvokeAsyncCommandOutput, LambdaClientResolvedConfig> {
    readonly input: InvokeAsyncCommandInput;
    constructor(input: InvokeAsyncCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InvokeAsyncCommandInput, InvokeAsyncCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
