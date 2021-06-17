import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { CreateResourceRequest, CreateResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateResourceCommandInput extends CreateResourceRequest {
}
export interface CreateResourceCommandOutput extends CreateResourceResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Amazon WorkMail resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceCommandInput} for command's `input` shape.
 * @see {@link CreateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateResourceCommand extends $Command<CreateResourceCommandInput, CreateResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: CreateResourceCommandInput;
    constructor(input: CreateResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResourceCommandInput, CreateResourceCommandOutput>;
    private serialize;
    private deserialize;
}
