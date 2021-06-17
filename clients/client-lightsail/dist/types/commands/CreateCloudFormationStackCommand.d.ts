import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateCloudFormationStackRequest, CreateCloudFormationStackResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCloudFormationStackCommandInput extends CreateCloudFormationStackRequest {
}
export interface CreateCloudFormationStackCommandOutput extends CreateCloudFormationStackResult, __MetadataBearer {
}
/**
 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
 *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
 *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
 *         records</code> operation to get a list of the CloudFormation stacks created.</p>
 *          <important>
 *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
 *           cloud formation stack</code> operation again with the same export snapshot record.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCloudFormationStackCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCloudFormationStackCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCloudFormationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationStackCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationStackCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCloudFormationStackCommand extends $Command<CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateCloudFormationStackCommandInput;
    constructor(input: CreateCloudFormationStackCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCloudFormationStackCommandInput, CreateCloudFormationStackCommandOutput>;
    private serialize;
    private deserialize;
}
