import { __extends } from "tslib";
import { DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse } from "../models/models_0";
import { deserializeAws_json1_0DeleteFHIRDatastoreCommand, serializeAws_json1_0DeleteFHIRDatastoreCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Data Store. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DeleteFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DeleteFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DeleteFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFHIRDatastoreCommand = /** @class */ (function (_super) {
    __extends(DeleteFHIRDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFHIRDatastoreCommand(input) {
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
    DeleteFHIRDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "DeleteFHIRDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFHIRDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFHIRDatastoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFHIRDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteFHIRDatastoreCommand(input, context);
    };
    DeleteFHIRDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteFHIRDatastoreCommand(output, context);
    };
    return DeleteFHIRDatastoreCommand;
}($Command));
export { DeleteFHIRDatastoreCommand };
//# sourceMappingURL=DeleteFHIRDatastoreCommand.js.map