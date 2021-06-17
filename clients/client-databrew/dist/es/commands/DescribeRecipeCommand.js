import { __extends } from "tslib";
import { DescribeRecipeRequest, DescribeRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRecipeCommand, serializeAws_restJson1DescribeRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the definition of a specific DataBrew recipe corresponding to a particular
 *             version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DescribeRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecipeCommandInput} for command's `input` shape.
 * @see {@link DescribeRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRecipeCommand = /** @class */ (function (_super) {
    __extends(DescribeRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRecipeCommand(input) {
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
    DescribeRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "DescribeRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRecipeCommand(input, context);
    };
    DescribeRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRecipeCommand(output, context);
    };
    return DescribeRecipeCommand;
}($Command));
export { DescribeRecipeCommand };
//# sourceMappingURL=DescribeRecipeCommand.js.map