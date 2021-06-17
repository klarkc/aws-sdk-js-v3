import { __extends } from "tslib";
import { CreateTemplateRequest, CreateTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateTemplateCommand, serializeAws_restJson1CreateTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a template from an existing QuickSight analysis or template. You can use the resulting
 * 			template to create a dashboard.</p>
 * 		       <p>A <i>template</i> is an entity in QuickSight that encapsulates the metadata
 * 			required to create an analysis and that you can use to create s dashboard. A template adds
 * 			a layer of abstraction by using placeholders to replace the dataset associated with the
 * 			analysis. You can use templates to create dashboards by replacing dataset placeholders
 * 			with datasets that follow the same schema that was used to create the source analysis
 * 			and template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTemplateCommand(input) {
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
    CreateTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTemplateCommand(input, context);
    };
    CreateTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTemplateCommand(output, context);
    };
    return CreateTemplateCommand;
}($Command));
export { CreateTemplateCommand };
//# sourceMappingURL=CreateTemplateCommand.js.map