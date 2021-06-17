import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateWorkerBlockRequest, CreateWorkerBlockResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorkerBlockCommandInput extends CreateWorkerBlockRequest {
}
export interface CreateWorkerBlockCommandOutput extends CreateWorkerBlockResponse, __MetadataBearer {
}
/**
 * <p>The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateWorkerBlockCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateWorkerBlockCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateWorkerBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkerBlockCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerBlockCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorkerBlockCommand extends $Command<CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateWorkerBlockCommandInput;
    constructor(input: CreateWorkerBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput>;
    private serialize;
    private deserialize;
}
