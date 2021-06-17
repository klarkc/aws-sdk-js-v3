import { __extends } from "tslib";
import { CreateGraphRequest, CreateGraphResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGraphCommand, serializeAws_restJson1CreateGraphCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new behavior graph for the calling account, and sets that account as the
 *          administrator account. This operation is called by the account that is enabling
 *          Detective.</p>
 *          <p>Before you try to enable Detective, make sure that your account has been enrolled in
 *          Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable
 *          Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable
 *          Detective, it checks whether your data volume is within the Detective quota. If it exceeds the
 *          quota, then you cannot enable Detective. </p>
 *          <p>The operation also enables Detective for the calling account in the currently selected
 *          Region. It returns the ARN of the new behavior graph.</p>
 *          <p>
 *             <code>CreateGraph</code> triggers a process to create the corresponding data tables for
 *          the new behavior graph.</p>
 *          <p>An account can only be the administrator account for one behavior graph within a Region.
 *          If the same account calls <code>CreateGraph</code> with the same administrator account, it
 *          always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new CreateGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGraphCommandInput} for command's `input` shape.
 * @see {@link CreateGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGraphCommand = /** @class */ (function (_super) {
    __extends(CreateGraphCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGraphCommand(input) {
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
    CreateGraphCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "CreateGraphCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGraphRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGraphResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGraphCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGraphCommand(input, context);
    };
    CreateGraphCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGraphCommand(output, context);
    };
    return CreateGraphCommand;
}($Command));
export { CreateGraphCommand };
//# sourceMappingURL=CreateGraphCommand.js.map