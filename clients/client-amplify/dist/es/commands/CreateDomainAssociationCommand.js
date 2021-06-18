import { __extends } from "tslib";
import { CreateDomainAssociationRequest, CreateDomainAssociationResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDomainAssociationCommand,
  serializeAws_restJson1CreateDomainAssociationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new domain association for an Amplify app. This action associates a custom
 *             domain with the Amplify app </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateDomainAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDomainAssociationCommand = /** @class */ (function (_super) {
  __extends(CreateDomainAssociationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDomainAssociationCommand(input) {
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
  CreateDomainAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "CreateDomainAssociationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDomainAssociationResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDomainAssociationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateDomainAssociationCommand(input, context);
  };
  CreateDomainAssociationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateDomainAssociationCommand(output, context);
  };
  return CreateDomainAssociationCommand;
})($Command);
export { CreateDomainAssociationCommand };
//# sourceMappingURL=CreateDomainAssociationCommand.js.map
