import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionEventInvokeConfig, PutFunctionEventInvokeConfigRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutFunctionEventInvokeConfigCommandInput extends PutFunctionEventInvokeConfigRequest {
}
export interface PutFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, __MetadataBearer {
}
/**
 * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous
 *         invocation</a> on a function, version, or alias. If a configuration already exists for a function, version,
 *       or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without
 *       affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p>
 *          <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains
 *       events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous
 *       invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with
 *         <a>UpdateFunctionConfiguration</a>.</p>
 *          <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events
 *       that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a
 *       dead-letter queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutFunctionEventInvokeConfigCommand extends $Command<PutFunctionEventInvokeConfigCommandInput, PutFunctionEventInvokeConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: PutFunctionEventInvokeConfigCommandInput;
    constructor(input: PutFunctionEventInvokeConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFunctionEventInvokeConfigCommandInput, PutFunctionEventInvokeConfigCommandOutput>;
    private serialize;
    private deserialize;
}
