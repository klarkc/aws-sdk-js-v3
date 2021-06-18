import { __extends } from "tslib";
import { CreateWorkspaceRequest, CreateWorkspaceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkspaceCommand,
  serializeAws_restJson1CreateWorkspaceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a new AMP workspace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateWorkspaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateWorkspaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new CreateWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkspaceCommand = /** @class */ (function (_super) {
  __extends(CreateWorkspaceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateWorkspaceCommand(input) {
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
  CreateWorkspaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmpClient";
    var commandName = "CreateWorkspaceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateWorkspaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkspaceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateWorkspaceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateWorkspaceCommand(input, context);
  };
  CreateWorkspaceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateWorkspaceCommand(output, context);
  };
  return CreateWorkspaceCommand;
})($Command);
export { CreateWorkspaceCommand };
//# sourceMappingURL=CreateWorkspaceCommand.js.map
