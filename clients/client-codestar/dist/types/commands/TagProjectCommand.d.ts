import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { TagProjectRequest, TagProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagProjectCommandInput extends TagProjectRequest {
}
export interface TagProjectCommandOutput extends TagProjectResult, __MetadataBearer {
}
/**
 * <p>Adds tags to a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, TagProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, TagProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new TagProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagProjectCommandInput} for command's `input` shape.
 * @see {@link TagProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagProjectCommand extends $Command<TagProjectCommandInput, TagProjectCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: TagProjectCommandInput;
    constructor(input: TagProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagProjectCommandInput, TagProjectCommandOutput>;
    private serialize;
    private deserialize;
}
