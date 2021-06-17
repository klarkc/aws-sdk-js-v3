import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListWorldGenerationJobsRequest, ListWorldGenerationJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorldGenerationJobsCommandInput extends ListWorldGenerationJobsRequest {
}
export interface ListWorldGenerationJobsCommandOutput extends ListWorldGenerationJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists world generator jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldGenerationJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldGenerationJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListWorldGenerationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorldGenerationJobsCommandInput} for command's `input` shape.
 * @see {@link ListWorldGenerationJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorldGenerationJobsCommand extends $Command<ListWorldGenerationJobsCommandInput, ListWorldGenerationJobsCommandOutput, RoboMakerClientResolvedConfig> {
    readonly input: ListWorldGenerationJobsCommandInput;
    constructor(input: ListWorldGenerationJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RoboMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorldGenerationJobsCommandInput, ListWorldGenerationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
