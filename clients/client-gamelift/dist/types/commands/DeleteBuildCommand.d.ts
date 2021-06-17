import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteBuildInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBuildCommandInput extends DeleteBuildInput {
}
export interface DeleteBuildCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a build. This operation permanently deletes the build resource and any uploaded
 *             build files. Deleting a build does not affect the status of any active fleets using the
 *             build, but you can no longer create new fleets with the deleted build.</p>
 *         <p>To delete a build, specify the build ID. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">
 *                 Upload a Custom Server Build</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateBuild</a> |
 *                     <a>ListBuilds</a> |
 *                     <a>DescribeBuild</a> |
 *                     <a>UpdateBuild</a> |
 *                     <a>DeleteBuild</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBuildCommandInput} for command's `input` shape.
 * @see {@link DeleteBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBuildCommand extends $Command<DeleteBuildCommandInput, DeleteBuildCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteBuildCommandInput;
    constructor(input: DeleteBuildCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBuildCommandInput, DeleteBuildCommandOutput>;
    private serialize;
    private deserialize;
}
