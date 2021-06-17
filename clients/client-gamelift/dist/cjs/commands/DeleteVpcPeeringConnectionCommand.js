"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVpcPeeringConnectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes a VPC peering connection. To delete the connection, you must have a valid
 *             authorization for the VPC peering connection that you want to delete. You can check for
 *             an authorization by calling <a>DescribeVpcPeeringAuthorizations</a> or
 *             request a new one using <a>CreateVpcPeeringAuthorization</a>. </p>
 *         <p>Once a valid authorization exists, call this operation from the AWS account that is
 *             used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection
 *             ID and fleet ID. If successful, the connection is removed. </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateVpcPeeringAuthorization</a> |
 *                     <a>DescribeVpcPeeringAuthorizations</a> |
 *                     <a>DeleteVpcPeeringAuthorization</a> |
 *                     <a>CreateVpcPeeringConnection</a> |
 *                     <a>DescribeVpcPeeringConnections</a> |
 *                     <a>DeleteVpcPeeringConnection</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteVpcPeeringConnectionCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "DeleteVpcPeeringConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteVpcPeeringConnectionInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteVpcPeeringConnectionOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteVpcPeeringConnectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteVpcPeeringConnectionCommand(output, context);
    }
}
exports.DeleteVpcPeeringConnectionCommand = DeleteVpcPeeringConnectionCommand;
//# sourceMappingURL=DeleteVpcPeeringConnectionCommand.js.map