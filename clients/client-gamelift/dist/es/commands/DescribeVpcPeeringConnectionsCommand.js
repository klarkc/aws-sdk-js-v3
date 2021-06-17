import { __extends } from "tslib";
import { DescribeVpcPeeringConnectionsInput, DescribeVpcPeeringConnectionsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand, serializeAws_json1_1DescribeVpcPeeringConnectionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information on VPC peering connections. Use this operation to get peering
 *             information for all fleets or for one specific fleet ID. </p>
 *         <p>To retrieve connection information, call this operation from the AWS account that
 *             is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty
 *             to retrieve all connection records. If successful, the retrieved information includes
 *             both active and pending connections. Active connections identify the IpV4 CIDR block
 *             that the VPC uses to connect. </p>
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
 * import { GameLiftClient, DescribeVpcPeeringConnectionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringConnectionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeVpcPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpcPeeringConnectionsCommand = /** @class */ (function (_super) {
    __extends(DescribeVpcPeeringConnectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpcPeeringConnectionsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeVpcPeeringConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeVpcPeeringConnectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpcPeeringConnectionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpcPeeringConnectionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpcPeeringConnectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeVpcPeeringConnectionsCommand(input, context);
    };
    DescribeVpcPeeringConnectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand(output, context);
    };
    return DescribeVpcPeeringConnectionsCommand;
}($Command));
export { DescribeVpcPeeringConnectionsCommand };
//# sourceMappingURL=DescribeVpcPeeringConnectionsCommand.js.map