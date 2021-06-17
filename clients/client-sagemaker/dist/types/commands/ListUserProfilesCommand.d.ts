import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListUserProfilesRequest, ListUserProfilesResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUserProfilesCommandInput extends ListUserProfilesRequest {
}
export interface ListUserProfilesCommandOutput extends ListUserProfilesResponse, __MetadataBearer {
}
/**
 * <p>Lists user profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListUserProfilesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListUserProfilesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUserProfilesCommand extends $Command<ListUserProfilesCommandInput, ListUserProfilesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListUserProfilesCommandInput;
    constructor(input: ListUserProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUserProfilesCommandInput, ListUserProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
