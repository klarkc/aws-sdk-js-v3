import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListWorkforcesRequest, ListWorkforcesResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorkforcesCommandInput extends ListWorkforcesRequest {
}
export interface ListWorkforcesCommandOutput extends ListWorkforcesResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to list all private and vendor workforces in an AWS Region. Note that you can only
 *       have one private workforce per AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkforcesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkforcesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListWorkforcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkforcesCommandInput} for command's `input` shape.
 * @see {@link ListWorkforcesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkforcesCommand extends $Command<ListWorkforcesCommandInput, ListWorkforcesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListWorkforcesCommandInput;
    constructor(input: ListWorkforcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkforcesCommandInput, ListWorkforcesCommandOutput>;
    private serialize;
    private deserialize;
}
