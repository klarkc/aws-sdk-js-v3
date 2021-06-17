import { __extends } from "tslib";
import { ListLocationsRequest, ListLocationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLocationsCommand, serializeAws_json1_1ListLocationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of source and destination locations.</p>
 *          <p>If you have more locations than are returned in a response (that is, the response
 *       returns only a truncated list of your agents), the response contains a token that you can
 *       specify in your next request to fetch the next page of locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListLocationsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListLocationsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLocationsCommandInput} for command's `input` shape.
 * @see {@link ListLocationsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLocationsCommand = /** @class */ (function (_super) {
    __extends(ListLocationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLocationsCommand(input) {
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
    ListLocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "ListLocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLocationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLocationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLocationsCommand(input, context);
    };
    ListLocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLocationsCommand(output, context);
    };
    return ListLocationsCommand;
}($Command));
export { ListLocationsCommand };
//# sourceMappingURL=ListLocationsCommand.js.map