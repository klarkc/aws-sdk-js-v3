import { __extends } from "tslib";
import { GetDomainAssociationRequest, GetDomainAssociationResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetDomainAssociationCommand,
  serializeAws_restJson1GetDomainAssociationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the domain information for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetDomainAssociationCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetDomainAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link GetDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainAssociationCommand = /** @class */ (function (_super) {
  __extends(GetDomainAssociationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDomainAssociationCommand(input) {
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
  GetDomainAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "GetDomainAssociationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainAssociationResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDomainAssociationCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetDomainAssociationCommand(input, context);
  };
  GetDomainAssociationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetDomainAssociationCommand(output, context);
  };
  return GetDomainAssociationCommand;
})($Command);
export { GetDomainAssociationCommand };
//# sourceMappingURL=GetDomainAssociationCommand.js.map
