import { __extends } from "tslib";
import { ExportTransitGatewayRoutesRequest, ExportTransitGatewayRoutesResult } from "../models/models_4";
import { deserializeAws_ec2ExportTransitGatewayRoutesCommand, serializeAws_ec2ExportTransitGatewayRoutesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket.
 *          By default, all routes are exported. Alternatively, you can filter by CIDR range.</p>
 *          <p>The routes are saved to the specified bucket in a JSON file. For more information, see
 *                 <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export Route Tables
 *                 to Amazon S3</a> in <i>Transit Gateways</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ExportTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportTransitGatewayRoutesCommand = /** @class */ (function (_super) {
    __extends(ExportTransitGatewayRoutesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportTransitGatewayRoutesCommand(input) {
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
    ExportTransitGatewayRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ExportTransitGatewayRoutesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportTransitGatewayRoutesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportTransitGatewayRoutesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportTransitGatewayRoutesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ExportTransitGatewayRoutesCommand(input, context);
    };
    ExportTransitGatewayRoutesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ExportTransitGatewayRoutesCommand(output, context);
    };
    return ExportTransitGatewayRoutesCommand;
}($Command));
export { ExportTransitGatewayRoutesCommand };
//# sourceMappingURL=ExportTransitGatewayRoutesCommand.js.map