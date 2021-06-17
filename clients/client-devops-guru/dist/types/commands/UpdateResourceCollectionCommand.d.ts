import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { UpdateResourceCollectionRequest, UpdateResourceCollectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateResourceCollectionCommandInput extends UpdateResourceCollectionRequest {
}
export interface UpdateResourceCollectionCommandOutput extends UpdateResourceCollectionResponse, __MetadataBearer {
}
/**
 * <p> Updates the collection of resources that DevOps Guru analyzes.
 * 			The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. This method also creates the IAM role required for you
 * 			to use DevOps Guru. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateResourceCollectionCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateResourceCollectionCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new UpdateResourceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCollectionCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCollectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateResourceCollectionCommand extends $Command<UpdateResourceCollectionCommandInput, UpdateResourceCollectionCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: UpdateResourceCollectionCommandInput;
    constructor(input: UpdateResourceCollectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceCollectionCommandInput, UpdateResourceCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
