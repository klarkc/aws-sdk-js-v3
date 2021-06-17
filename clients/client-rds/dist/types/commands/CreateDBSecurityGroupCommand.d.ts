import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDBSecurityGroupCommandInput extends CreateDBSecurityGroupMessage {
}
export interface CreateDBSecurityGroupCommandOutput extends CreateDBSecurityGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
 *          <note>
 *             <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDBSecurityGroupCommand extends $Command<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBSecurityGroupCommandInput;
    constructor(input: CreateDBSecurityGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
