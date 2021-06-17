import { __extends } from "tslib";
import { DescribeJobRequest, DescribeJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeJobCommand, serializeAws_restJson1DescribeJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the definition of a specific DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobCommand = /** @class */ (function (_super) {
    __extends(DescribeJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobCommand(input) {
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
    DescribeJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "DescribeJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJobCommand(input, context);
    };
    DescribeJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJobCommand(output, context);
    };
    return DescribeJobCommand;
}($Command));
export { DescribeJobCommand };
//# sourceMappingURL=DescribeJobCommand.js.map