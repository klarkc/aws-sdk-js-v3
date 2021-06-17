import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCuratedEnvironmentImagesCommandInput extends ListCuratedEnvironmentImagesInput {
}
export interface ListCuratedEnvironmentImagesCommandOutput extends ListCuratedEnvironmentImagesOutput, __MetadataBearer {
}
/**
 * <p>Gets information about Docker images that are managed by AWS CodeBuild.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListCuratedEnvironmentImagesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListCuratedEnvironmentImagesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListCuratedEnvironmentImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCuratedEnvironmentImagesCommandInput} for command's `input` shape.
 * @see {@link ListCuratedEnvironmentImagesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCuratedEnvironmentImagesCommand extends $Command<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: ListCuratedEnvironmentImagesCommandInput;
    constructor(input: ListCuratedEnvironmentImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput>;
    private serialize;
    private deserialize;
}
