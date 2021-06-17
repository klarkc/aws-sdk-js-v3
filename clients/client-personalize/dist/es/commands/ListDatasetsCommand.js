import { __extends } from "tslib";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDatasetsCommand, serializeAws_json1_1ListDatasetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of datasets contained in the given dataset group. The response provides
 *       the properties for each dataset, including the Amazon Resource Name (ARN). For more
 *       information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetsCommand(input) {
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
    ListDatasetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListDatasetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDatasetsCommand(input, context);
    };
    ListDatasetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDatasetsCommand(output, context);
    };
    return ListDatasetsCommand;
}($Command));
export { ListDatasetsCommand };
//# sourceMappingURL=ListDatasetsCommand.js.map