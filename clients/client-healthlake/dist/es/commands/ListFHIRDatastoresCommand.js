import { __extends } from "tslib";
import { ListFHIRDatastoresRequest, ListFHIRDatastoresResponse } from "../models/models_0";
import { deserializeAws_json1_0ListFHIRDatastoresCommand, serializeAws_json1_0ListFHIRDatastoresCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store
 *          status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRDatastoresCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRDatastoresCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new ListFHIRDatastoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFHIRDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListFHIRDatastoresCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFHIRDatastoresCommand = /** @class */ (function (_super) {
    __extends(ListFHIRDatastoresCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFHIRDatastoresCommand(input) {
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
    ListFHIRDatastoresCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "ListFHIRDatastoresCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFHIRDatastoresRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFHIRDatastoresResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFHIRDatastoresCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListFHIRDatastoresCommand(input, context);
    };
    ListFHIRDatastoresCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListFHIRDatastoresCommand(output, context);
    };
    return ListFHIRDatastoresCommand;
}($Command));
export { ListFHIRDatastoresCommand };
//# sourceMappingURL=ListFHIRDatastoresCommand.js.map