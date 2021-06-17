import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceIamInstanceProfileAssociationRequest, ReplaceIamInstanceProfileAssociationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReplaceIamInstanceProfileAssociationCommandInput extends ReplaceIamInstanceProfileAssociationRequest {
}
export interface ReplaceIamInstanceProfileAssociationCommandOutput extends ReplaceIamInstanceProfileAssociationResult, __MetadataBearer {
}
/**
 * <p>Replaces an IAM instance profile for the specified running instance. You can use
 *             this action to change the IAM instance profile that's associated with an instance
 *             without having to disassociate the existing IAM instance profile first.</p>
 *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceIamInstanceProfileAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceIamInstanceProfileAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceIamInstanceProfileAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceIamInstanceProfileAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceIamInstanceProfileAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReplaceIamInstanceProfileAssociationCommand extends $Command<ReplaceIamInstanceProfileAssociationCommandInput, ReplaceIamInstanceProfileAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceIamInstanceProfileAssociationCommandInput;
    constructor(input: ReplaceIamInstanceProfileAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceIamInstanceProfileAssociationCommandInput, ReplaceIamInstanceProfileAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
