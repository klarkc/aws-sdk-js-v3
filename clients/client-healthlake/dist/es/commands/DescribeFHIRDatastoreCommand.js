import { __extends } from "tslib";
import { DescribeFHIRDatastoreRequest, DescribeFHIRDatastoreResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeFHIRDatastoreCommand, serializeAws_json1_0DescribeFHIRDatastoreCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with the FHIR Data Store, including the Data Store ID,
 *          Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and
 *          Data Store endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DescribeFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFHIRDatastoreCommand = /** @class */ (function (_super) {
    __extends(DescribeFHIRDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFHIRDatastoreCommand(input) {
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
    DescribeFHIRDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "DescribeFHIRDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFHIRDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFHIRDatastoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFHIRDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeFHIRDatastoreCommand(input, context);
    };
    DescribeFHIRDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeFHIRDatastoreCommand(output, context);
    };
    return DescribeFHIRDatastoreCommand;
}($Command));
export { DescribeFHIRDatastoreCommand };
//# sourceMappingURL=DescribeFHIRDatastoreCommand.js.map