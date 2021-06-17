import { __extends } from "tslib";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateDatasetCommand, serializeAws_json1_0CreateDatasetCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a container for a collection of data being ingested for analysis. The dataset
 *          contains the metadata describing where the data is and what the data actually looks like.
 *          In other words, it contains the location of the data source, the data schema, and other
 *          information. A dataset also contains any tags associated with the ingested data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateDatasetCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateDatasetCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDatasetCommand = /** @class */ (function (_super) {
    __extends(CreateDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDatasetCommand(input) {
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
    CreateDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutEquipmentClient";
        var commandName = "CreateDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateDatasetCommand(input, context);
    };
    CreateDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateDatasetCommand(output, context);
    };
    return CreateDatasetCommand;
}($Command));
export { CreateDatasetCommand };
//# sourceMappingURL=CreateDatasetCommand.js.map