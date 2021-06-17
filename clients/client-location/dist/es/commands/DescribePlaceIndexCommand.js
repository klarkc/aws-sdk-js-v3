import { __extends } from "tslib";
import { DescribePlaceIndexRequest, DescribePlaceIndexResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePlaceIndexCommand, serializeAws_restJson1DescribePlaceIndexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the place index resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DescribePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePlaceIndexCommand = /** @class */ (function (_super) {
    __extends(DescribePlaceIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePlaceIndexCommand(input) {
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
    DescribePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePlaceIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePlaceIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePlaceIndexCommand(input, context);
    };
    DescribePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePlaceIndexCommand(output, context);
    };
    return DescribePlaceIndexCommand;
}($Command));
export { DescribePlaceIndexCommand };
//# sourceMappingURL=DescribePlaceIndexCommand.js.map