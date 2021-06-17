import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListExperimentsRequest, ListExperimentsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListExperimentsCommandInput extends ListExperimentsRequest {
}
export interface ListExperimentsCommandOutput extends ListExperimentsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the experiments in your account. The list can be filtered to show only
 *       experiments that were created in a specific time range. The list can be sorted by experiment
 *       name or creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListExperimentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListExperimentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListExperimentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExperimentsCommandInput} for command's `input` shape.
 * @see {@link ListExperimentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListExperimentsCommand extends $Command<ListExperimentsCommandInput, ListExperimentsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListExperimentsCommandInput;
    constructor(input: ListExperimentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListExperimentsCommandInput, ListExperimentsCommandOutput>;
    private serialize;
    private deserialize;
}
