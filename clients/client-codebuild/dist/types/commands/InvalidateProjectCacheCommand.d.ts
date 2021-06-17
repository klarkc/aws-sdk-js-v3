import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { InvalidateProjectCacheInput, InvalidateProjectCacheOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InvalidateProjectCacheCommandInput extends InvalidateProjectCacheInput {
}
export interface InvalidateProjectCacheCommandOutput extends InvalidateProjectCacheOutput, __MetadataBearer {
}
/**
 * <p>Resets the cache for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, InvalidateProjectCacheCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, InvalidateProjectCacheCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new InvalidateProjectCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvalidateProjectCacheCommandInput} for command's `input` shape.
 * @see {@link InvalidateProjectCacheCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InvalidateProjectCacheCommand extends $Command<InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: InvalidateProjectCacheCommandInput;
    constructor(input: InvalidateProjectCacheCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput>;
    private serialize;
    private deserialize;
}
