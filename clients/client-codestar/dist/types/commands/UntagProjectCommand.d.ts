import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UntagProjectRequest, UntagProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagProjectCommandInput extends UntagProjectRequest {
}
export interface UntagProjectCommandOutput extends UntagProjectResult, __MetadataBearer {
}
/**
 * <p>Removes tags from a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UntagProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UntagProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new UntagProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagProjectCommandInput} for command's `input` shape.
 * @see {@link UntagProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagProjectCommand extends $Command<UntagProjectCommandInput, UntagProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: UntagProjectCommandInput;
    constructor(input: UntagProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagProjectCommandInput, UntagProjectCommandOutput>;
    private serialize;
    private deserialize;
}
