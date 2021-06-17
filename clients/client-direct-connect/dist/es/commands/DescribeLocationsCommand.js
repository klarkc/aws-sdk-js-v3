import { __extends } from "tslib";
import { Locations } from "../models/models_0";
import { deserializeAws_json1_1DescribeLocationsCommand, serializeAws_json1_1DescribeLocationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS Direct Connect locations in the current AWS Region. These are the locations that can be selected when calling
 *       <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeLocationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeLocationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLocationsCommand = /** @class */ (function (_super) {
    __extends(DescribeLocationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLocationsCommand(input) {
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
    DescribeLocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectConnectClient";
        var commandName = "DescribeLocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: Locations.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeLocationsCommand(input, context);
    };
    DescribeLocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeLocationsCommand(output, context);
    };
    return DescribeLocationsCommand;
}($Command));
export { DescribeLocationsCommand };
//# sourceMappingURL=DescribeLocationsCommand.js.map