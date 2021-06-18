import { __extends } from "tslib";
import { UpdateDomainAssociationRequest, UpdateDomainAssociationResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDomainAssociationCommand,
  serializeAws_restJson1UpdateDomainAssociationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new domain association for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new UpdateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDomainAssociationCommand = /** @class */ (function (_super) {
  __extends(UpdateDomainAssociationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateDomainAssociationCommand(input) {
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
  UpdateDomainAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "UpdateDomainAssociationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainAssociationResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateDomainAssociationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateDomainAssociationCommand(input, context);
  };
  UpdateDomainAssociationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateDomainAssociationCommand(output, context);
  };
  return UpdateDomainAssociationCommand;
})($Command);
export { UpdateDomainAssociationCommand };
//# sourceMappingURL=UpdateDomainAssociationCommand.js.map
